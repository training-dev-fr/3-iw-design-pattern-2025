<?php
    abstract class Console{
        private $controller1;
        private $controller2;

        public function __construct(IController $controller1, Icontroller $controller2){
            $this->controller1 = $controller1;
            $this->controller2 = $controller2;
        }

        public function pressButtonDownP1(){
            $this->controller1->pressButtonDown();
        }
    }