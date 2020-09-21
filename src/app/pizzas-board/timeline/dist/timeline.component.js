"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimelineComponent = void 0;
var core_1 = require("@angular/core");
var vis_timeline_1 = require("vis-timeline");
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
        if (this.chefs && this.vehicles) {
            this.generateTL();
        }
    };
    TimelineComponent.prototype.generateTL = function () {
        var _this = this;
        // create groups to highlight groupUpdate
        var groups = [];
        this.chefs.forEach(function (chef) {
            groups.push({
                id: chef.id,
                content: chef.name
            });
        });
        console.log('gps', groups);
        var items = [];
        this.vehicles.forEach(function (vehicle) {
            items.push({
                id: vehicle.id,
                content: vehicle.name,
                start: _this.randomDate(new Date(2012, 0, 1), new Date()),
                end: _this.randomDate(new Date(2012, 0, 1), new Date()),
                // tslint:disable-next-line: radix
                group: parseInt((Math.random() * groups.length).toString())
            });
        });
        console.log('items', items);
        var options = {
            autoResize: true,
            width: '100%',
            height: '750px'
        };
        var container = document.getElementById('visualization');
        if (container) {
            var timeline = new vis_timeline_1.Timeline(container, items, groups, options);
        }
    };
    TimelineComponent.prototype.randomDate = function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "chefs");
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "vehicles");
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'app-timeline',
            templateUrl: './timeline.component.html',
            styleUrls: ['./timeline.component.scss']
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
