/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let preMap = {};
    let visited = new Set();
    let result = new Set();
    // make adjaceny list
    for(let [course,dependsOnCourse] of prerequisites){
        if(course in preMap){
            preMap[course].push(dependsOnCourse);
        }
        else{
            preMap[course] = [dependsOnCourse];
        }
    }

    const dfs = function(courseId){
        if(visited.has(courseId)){
            return false;
        }
        if(!(courseId in preMap)){
            result.add(courseId);
            return true;
        }
        if(preMap[courseId].length === 0){
            result.add(courseId);
            return true;
        }

        const connectedCourses = preMap[courseId];
        visited.add(courseId);
        for(const course of connectedCourses){
            if(!dfs(course)){
                return false;
            }
        }
        visited.delete(courseId);
        preMap[courseId] = [];

        result.add(courseId);
        return true;
    }

    for(let i=0; i<numCourses; i++){
        if(result.has(i)){
            continue;
        }

        if(!dfs(i)){
            return [];
        }
    }

    return Array.from(result);
};
