<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function likeIt(Reply $reply)
    {
        $reply->likes()->create([
            'user_id' => auth()->user()->id
        ]);
    }

    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id', auth()->user()->id)->first()->delete();
    }
}
