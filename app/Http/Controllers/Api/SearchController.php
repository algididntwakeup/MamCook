<?php

namespace App\Http\Controllers\Api;

use App\Filament\Resources\RecipeResource;
use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    //
    public function index(Request $request) {
        $search = $request->input('query');

        $recipes = Recipe::with('author')
        ->where("name", "LIKE", "%" . $search . "%")->get();

        return RecipeResource::collection($recipes);
    }
}
