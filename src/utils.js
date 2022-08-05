const getCoursePassed = (course) => {
  const count = course.topics.filter(
    (t) => (t.score >= 12) & (t.times > 0) & (t.times <= 3)
  ).length;
  return count === course.topics.length ? 1 : 0;
};

const getAvgCourseCompleted = (course) => {
  const count = course.topics.filter(
    (t) => (t.score >= 0) & (t.times > 0) & (t.times <= 3)
  ).length;
  if (count === course.topics.length) {
    let sum = 0;
    course.topics.forEach((t) => {
      sum += t.score;
    });
    const average = sum / course.topics.length;
    return average;
  }
  return 0;
};

const getCountTriesperCourse = (course) => {
  let count = 0;
  course.topics.map((t) => {
    count += t.times;
  });
  return count;
};

export const getCoursesPassed = (courses) => {
  let count = 0;
  courses.map((c) => {
    count += getCoursePassed(c[0]);
    return 1;
  });
  return count;
};

export const getAvgCoursesCompleted = (courses) => {
  let sum = 0;
  let count = 0;
  courses.map((c) => {
    sum += getAvgCourseCompleted(c[0]);
    if (getAvgCourseCompleted(c[0]) > 0) count += 1;
    return 1;
  });
  return sum / count;
};

export const getLastDateCourse = (courses) => {
  let lastDate = 0;
  courses.map((c) => {
    lastDate = lastDate > c[0].courseDate ? lastDate : c[0].courseDate;
    return 1;
  });
  return lastDate;
};

export const getCountTries = (courses) => {
  let count = 0;
  courses.map((c) => {
    count += getCountTriesperCourse(c[0]);
    return 1;
  });
  return count;
};
