<?php

namespace App\Model;

use App\User;
use App\Model\Like;
use App\Model\Question;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function($reply) {
            $reply->user_id = auth()->id();
        });
    }

    // protected $guarded = [];

    protected $fillable = [ 'body', 'question_id', 'user_id' ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    // public function like()
    // {
    //     return $this->belongsTo(Like::class);
    // }
}
