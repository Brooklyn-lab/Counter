import { CountUp } from './countUp.min.js';

window.addEventListener('DOMContentLoaded', () => {
  const coursesElem = document.getElementById('courses'),
    studentsElem = document.getElementById('students'),
    webinarsElem = document.getElementById('webinars'),
    insidersElem = document.getElementById('insiders');

  // Options
  const options = {
    // animation duration in seconds (number)
    duration: 3,
    // start animation when target is in view
    enableScrollSpy: true,
    // delay (ms) after target comes into view
    scrollSpyDelay: 1,
    // run only once
    scrollSpyOnce: true,
  };

      new CountUp(coursesElem, 4008, options);
      new CountUp(studentsElem, 65465, options);
      new CountUp(webinarsElem, 564, options);
      new CountUp(insidersElem, 123, options);

  const urls = [
    'http://djzihyulxo.eu09.qoddiapp.com/api/v1/courses',
    'http://djzihyulxo.eu09.qoddiapp.com/api/v1/courses/1335944/enrollments',
    'http://djzihyulxo.eu09.qoddiapp.com/api/v1/courses/1335944',
    'http://djzihyulxo.eu09.qoddiapp.com/api/v1/users',
  ];
  const arrayFetchData = urls.map((url) =>
    fetch(url).then((res) => res.json())
  );

  Promise.allSettled(arrayFetchData).then((res) => {
    const coursesCount = res[0]?.value?.courses?.length,
      insidersCount = res[1]?.value?.meta?.total,
      webinars = res[2]?.value?.course?.lecture_sections,
      studentsCount = res[3]?.value?.meta?.total;

    const webinarsCount = webinars.find((webinar) =>
      webinar.id === 5663972 ? webinar : 0
    ).lectures.length;

    new CountUp(coursesElem, coursesCount, options);
    new CountUp(studentsElem, studentsCount, options);
    new CountUp(webinarsElem, webinarsCount, options);
    new CountUp(insidersElem, insidersCount, options);
  });
});
