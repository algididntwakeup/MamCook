<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Recipe extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "category_id",
        "recipe_author_id",
        "name",
        "slug",
        "thumbnail",
        "about",
        "url_file",
        "url_video",
    ];

    public function setNameAttribute($value)
    {
        $this->attributes["name"] = $value;
        $this->attributes["slug"] = Str::slug($value);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(RecipeAuthor::class, 'recipe_author_id');
        //jika nama method tidak sama dengan field nya, maka akan menjadi masalah ketika tidak mendefinisikan id dengan tepat
    }

    public function photos(): HasMany
    {
        return $this->hasMany(RecipePhoto::class);
    }

    public function tutorials(): HasMany
    {
        return $this->hasMany(RecipeTutorial::class);
    }

    public function recipeIngredients(): HasMany
    {
        return $this->hasMany(RecipeIngredient::class);
    }
}
