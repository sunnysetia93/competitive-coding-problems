/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preMap = {};
    const visited = {};

    function dfs(course) {
        if(course in visited && visited[course] === true){
            return false;
        }
        if(!(course in preMap)){
            return true;
        }
        if(preMap[course].length === 0){
            return true;
        }

        const connectedCourses = preMap[course];

        visited[course] = true;
        for(let connectedCourse of connectedCourses){
            if(!dfs(connectedCourse)){
                return false;
            }
        }
        preMap[course] = [];
        visited[course] = false;

        return true;
    }

    for(let [v,e] of prerequisites){
        if(preMap[v] != null){
            preMap[v].push(e);
        }
        else {
            preMap[v] = [e];
        }
    }

    for(let i=0;i<numCourses;i++){
        if(!dfs(i)){
            return false;
        }
    }

    return true;
};
