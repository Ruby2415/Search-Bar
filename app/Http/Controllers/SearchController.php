<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Novel;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');

        $authors = Author::where('name', 'like', "%{$query}%")
            ->limit(5)
            ->get(['id', 'name']);

        $novels = Novel::where('title', 'like', "%{$query}%")
            ->limit(10)
            ->get(['id', 'title']);

        return response()->json([
            'authors' => $authors,
            'novels' => $novels,
        ]);
    }
}
