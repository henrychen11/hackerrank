var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort( (a,b) => a.end-b.end )
    console.log("sorted", intervals);
    let count = 1;
    let end = intervals[0].end;
    console.log("test", count, end)
    for (let i=1; i<intervals.length; i++){
        if (intervals[i].start >= end){
            end = intervals[i].end;
            count += 1;
        }
    }
    return intervals.length - count;
};
