<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Voyager;
use Inertia\Inertia;
use TCG\Voyager\Models\Page;

class PageController extends Controller
{
    /**
     * Home Page Controller
     *
     * @return void
     */
    public function index() 
    {
        $page = Page::where('slug', 'home-page')->first();
        
        if($page->image)
            $page->image = Voyager::image($page->image);
        else {
            $page->image = null;
        }

        return Inertia::render(
            'Home',
            [
                'title' => $page->title,
                'slug' => $page->slug,
                'page' => $page,
            ]
        );
    }

    /**
     * About Page Controller
     *
     * @return void
     */
    public function about() 
    {
        $page = Page::where('slug', 'about-page')->firstorFail();
        
        if($page->image)
            $page->image = Voyager::image($page->image);
        else {
            $page->image = null;
        }

        return Inertia::render(
            'About',
            [
                'title' => $page->title,
                'slug' => $page->slug,
                'page' => $page,
            ]
        );
    }

    /**
     * Contact Page Controller
     *
     * @return void
     */
    public function contact() 
    {
        $page = Page::where('slug', 'contact-page')->firstorFail();
        
        if($page->image)
            $page->image = Voyager::image($page->image);
        else {
            $page->image = null;
        }

        return Inertia::render(
            'Contact',
            [
                'title' => $page->title,
                'slug' => $page->slug,
                'page' => $page,
            ]
        );
    }
}
