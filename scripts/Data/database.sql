CREATE TABLE taskList(
    taskId NUMBER CONSTRAINT PKTaskId PRIMARY KEY,
    taskName VARCHAR2(50),
    taskDesc VARCHAR2(100),
    taskDate DATE NOT NULL,
    taskPriority VARCHAR2(1) NOT NULL
)