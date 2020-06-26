<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LeadReminder_Api extends Model
{
    public $timestamps = false;
    public  $table = "reminder";
    protected $fillable = ['cust_id', 'reminder_name',
                           'reminder_date', 'reminder_time',
                            'reminderstatus', 'reminder_description', 
                            'created_at', 'updated_at'];
}
