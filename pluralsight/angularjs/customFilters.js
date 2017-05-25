angular.module("exampleApp")
.filter("labelCase", function () {
    return function (value, toUpper) {
        if (angular.isString(value)) {
            var intermediate = toUpper ? value.toUpperCase() : value.toLowerCase();
            return (toUpper ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase())
                + intermediate.substr(1);
        } else {
            return value;
        }
    };
})
.filter("skip", function () {
    return function (data, count) {
        if (angular.isArray(data) && angular.isNumber(count)) {
            if (count > data.length || count < 1) {
                return data;
            } else {
                return data.slice(count);
            }
        } else {
            return data;
        }
    }
})
.filter("take", function ($filter) {
    return function (data, skipCount, takeCount) {
        var skippedData = $filter("skip")(data, skipCount);
        return $filter("limitTo")(skippedData, takeCount);
    }
});