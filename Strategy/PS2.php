<?php
    class MegaDrive2 extends Console{
        private $controller1;
        private $controller2;

        public function __construct(){
            $this->controller1 = new Controller();
            $this->controller2 = new Controller();
        }
    }