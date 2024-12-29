<?php

namespace App\Http\Controllers\Api;

use App\Filament\Resources\RecipeResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    //
    public function index(Request $request) {
        $query = $request->input('query');
        $recipes = Recipes::where('name','LIKE', "%{$query}%")->get();
        return RecipeResource::collection($recipes);
    }
}
