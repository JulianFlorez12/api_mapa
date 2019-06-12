<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $fillable=['nombre','latitud','logitud'];
    public $timestamps=false;
}
