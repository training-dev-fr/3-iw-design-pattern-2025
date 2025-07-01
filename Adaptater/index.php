<?php
function showMap($map,$lat,$lon){
    $map->getPosition($lat,$lon);
}

function getShopInformation($map,$lat,$lon){
    $map->getPosition($lat,$lon);
}
   