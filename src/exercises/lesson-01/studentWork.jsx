//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Cesar';
  const age = '42';
  const hobbies = [
    'Wood Working & CNC',
    'Photography',
    'Working on cars',
    'Video Games',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>Hello world, my name is {name}.</h1>
      <p>
        My background is in multimedia design & production. That has led me down
        a path of graphic, web, and motion graphics design. Until finding that I
        really enjoy building web applications and landing my first job as a
        software engineer. I have primarily worked with Angular, and more
        recently Vue. But am now aspiring to add React to my toolbelt as well.
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
