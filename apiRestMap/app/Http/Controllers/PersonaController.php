<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Persona;

class PersonaController extends Controller
{
    public function getPersonas(){
        $personas=Persona::all();
        return response()->json($personas);
    }
}
