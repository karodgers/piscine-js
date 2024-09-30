const escapeStr = "` \\ / \" '";
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
    str : "string",
    num : 5,
    bool : true,
    undef : undefined
});
const nested = Object.freeze({
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "another string",
        num : 3301,
        bool : false
    })
});
