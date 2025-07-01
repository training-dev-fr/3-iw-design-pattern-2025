<?php
    class User{
        private $firstname;
        private $lastname;
        private $birthdate;

        public function __construct(){
            
        }

        public function getFirstname(){
            return $this->firstname;
        }

        public function gettLastname(){
            return $this->lastname;
        }

        public function getBirthdatename(){
            return $this->birthdate;
        }

        public function setFirstname($value){
            if(gettype($value) === string && preg_match('/[a-zA-Z- ]')){
                $this->firstname = $value;
            }
        }
    }