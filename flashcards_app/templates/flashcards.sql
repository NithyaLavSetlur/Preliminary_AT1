-- Create the flashcards table
CREATE TABLE flashcards (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    answer TEXT NOT NULL
);

-- Insert five questions and answers
INSERT INTO flashcards (question, answer) VALUES
('Question 1', 'Answer 1'),
('Question 2', 'Answer 2'),
('Question 3', 'Answer 3'),
('Question 4', 'Answer 4'),
('Question 5', 'Answer 5');
