<?php
    class Singleton{
            private static $instance;

            private function __construct(){

            }

            public function getInstance(){
                if(!self::$instance){
                    self::$instance = new Singleton();
                }
                return self::$instance;
            }
    }