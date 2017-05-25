"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // Slide Categories
        this.slideCategories = [
            { id: '1', title: 'Bakery', image: 'http://placehold.it/1110x480', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Takeaway', image: 'http://placehold.it/1110x480', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Dairy', image: 'http://placehold.it/1110x480', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
        ];
        // Card categories
        this.cardCategories = [
            { id: '1', title: 'Bakery', image: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Takeaway', image: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Dairy', image: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
            { id: '4', title: 'Meat', image: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, and pork.' },
            { id: '5', title: 'Seafood', image: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
            { id: '6', title: 'Fruit & Veg', image: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' },
        ];
    }
    AppComponent.prototype.selectCategory = function (category) {
        console.log('Selected category', category.title);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map