<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Centro extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo',
        'nombre',
        'direccion',
        'logotipo',
        'responsable',
    ];
}
