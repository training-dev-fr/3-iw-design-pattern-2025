<?php
    Interface IMap{
        public function getPosition($lat,$long);

        public function searchByCity($city);
    }