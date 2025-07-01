<?php
$user = new User();
$user->firstname = "Aurélien";
$user->lastname = "Vaast";
$user->birthdate = "<script>alert('hack')</script>";