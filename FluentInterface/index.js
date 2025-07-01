import { $ } from "./Fluent.js";
import User from "./User.js";

$('.test').setColor('red').setFontSize('18px');

let user = new User('Aurélien','Vaast','01/02/2003');
user.setFirstname('jean').setLastname('dupont');
