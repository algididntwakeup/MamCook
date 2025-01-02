import { Link, useParams } from 'react-router-dom';
import CategoryFeaturedRecipesWrapper from '../wrappers/CategoryFeaturedRecipesWrapper';
import { useEffect, useState } from 'react';
import { Category } from '../types/type';
import axios from 'axios';
import CategoryLatestFeaturedRecipesWrapper from '../wrappers/CategoryLatestFeaturedRecipesWrapper';

export default function CategoryDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}/category/${slug}`, {
        headers: {
          'X-API-KEY': import.meta.env.VITE_APP_API_KEY,
        },
      })
      .then((response) => {
        setCategory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (error) {
    return <div className="min-h-screen flex items-center justify-center">Error loading data: {error}</div>;
  }
  if (!category) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  const assetUrl = import.meta.env.VITE_APP_ASSET_URL;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-white lg:p-5">
        <Link to="/" className="mb-8">
          <img src="/assets/images/logos/logomamcook.svg" alt="logo" className="w-32" />
        </Link>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center space-x-3 text-gray-600 hover:text-orange-500">
            <img src="/assets/images/icons/note-favorite-grey.svg" className="w-6 h-6" alt="icon" />
            <span>Browse</span>
          </Link>
          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-orange-500">
            <img src="/assets/images/icons/crown-grey.svg" className="w-6 h-6" alt="icon" />
            <span>Featured</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-orange-500">
            <img src="/assets/images/icons/receipt-item-grey.svg" className="w-6 h-6" alt="icon" />
            <span>Pricing</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-orange-500">
            <img src="/assets/images/icons/setting-2-grey.svg" className="w-6 h-6" alt="icon" />
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Navigation */}
        <nav className="absolute top-0 flex w-full lg:w-[calc(100%-16rem)] items-center justify-between px-5 mt-[30px] z-20">
          <Link to={'/'}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30">
              <img src="/assets/images/icons/arrow-left.svg" className="w-5 h-5 object-contain" alt="icon" />
            </div>
          </Link>
          <h1 className="font-semibold text-white lg:text-xl">Category</h1>
          <button className="appearance-none">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30">
              <img src="/assets/images/icons/more.svg" className="w-5 h-5 object-contain" alt="icon" />
            </div>
          </button>
        </nav>

        {/* Header */}
        <header className="relative w-full h-fit flex flex-col shrink-0 rounded-b-[40px] lg:rounded-none">
          <div className="relative flex shrink-0 w-full h-[260px] lg:h-[320px] rounded-b-[40px] lg:rounded-none bg-black overflow-hidden -mb-[45px]">
            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180.17deg,rgba(0,0,0,0)42.98%,rgba(0,0,0,0.76)79.32%)] z-10 rotate-180" />
            <img src="/assets/images/thumbnails/category-background.png" className="w-full h-full object-cover" alt="thumbnail" />
          </div>
          <div className="relative px-5 lg:px-8 z-10">
            <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-[20px] p-[10px_20px] gap-4 bg-white shadow-[0_12px_30px_0_#D6D6D640]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden">
                  <img src={`${assetUrl}/${category.icon}`} className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-lg lg:text-xl leading-[27px]">{category.name}</p>
                  <p className="text-sm lg:text-base leading-[21px] text-[#848486]">{category.recipes_count} Recipes</p>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white overflow-hidden shadow-[0_10px_20px_0_#D6D6D6AB] hover:shadow-[0_10px_20px_0_#FF4C1C80] transition-all duration-300">
                <img src="/assets/images/icons/heart-black.svg" alt="icon" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <CategoryFeaturedRecipesWrapper />
          <CategoryLatestFeaturedRecipesWrapper />
        </div>
      </div>
    </div>
  );
}
