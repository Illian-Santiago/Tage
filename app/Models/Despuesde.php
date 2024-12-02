<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Despuesde extends Model
{
    public function despuesde(): BelongsTo
    {
        return $this->belongsTo(Registro::class);
    }
}
