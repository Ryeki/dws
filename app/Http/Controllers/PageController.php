<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Voyager;
use Inertia\Inertia;
use TCG\Voyager\Models\Page;

use App\Models\Gallery;

use App\Mail\SendKontakt;

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

        $galleries = Gallery::orderBy('created_at', 'desc')->get();

        foreach ($galleries as $gallery) {
            $gallery->images = json_decode($gallery->images);

            $tmpGalleryImages = array();

            //testingasdsad

            foreach ($gallery->images as $img) {

                $img = [
                    'thumb' => Voyager::image($img),
                    'original' => Voyager::image($gallery->getThumbnail($img, 'cropped'))
                ];

                array_push($tmpGalleryImages, $img);
            }

            $gallery->images = $tmpGalleryImages;

        }

        return Inertia::render(
            'About',
            [
                'title' => $page->title,
                'slug' => $page->slug,
                'page' => $page,
                'galleries' => $galleries
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

    /**
     * Submitted contact form. Sends an email
     *
     * @param Request $request
     * @return void
     */
    public function contactSubmit(Request $request)
    {
        $mailData = array(
            'name'     => $request->name,
            'email'     => $request->email,
            'message' => nl2br($request->message),
        );

        \Mail::to(setting('site.admin_kontakt_email'))
            ->send(new SendKontakt($mailData)); 

        return redirect()->back()->with(['success' => 'E-Mail sent!']);
    }
}
