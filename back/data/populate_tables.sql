BEGIN;
INSERT INTO users (firstname, lastname, username, email) VALUES 
('John', 'Doe', 'johndoe', 'john.doe@example.com'),
('Jane', 'Smith', 'janesmith', 'jane.smith@example.com'),
('Alice', 'Johnson', 'alicej', 'alice.johnson@example.com');

INSERT INTO boards (name) VALUES ('Platform Launch'), ('Marketing Plan'), ('Roadmap');

INSERT INTO columns (name, board_id) VALUES 
('Todo', 1), 
('Doing', 1), 
('Done', 1), 
('Todo', 2), 
('Doing', 2), 
('Done', 2), 
('Now', 3), 
('Next', 3), 
('Later', 3);

INSERT INTO tasks (title, description, status, column_id) VALUES 
('Build UI for onboarding flow', '', 'Todo', 1),
('Build UI for search', '', 'Todo', 1),
('Build settings UI', '', 'Todo', 1),
('QA and test all major user journeys', 'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.', 'Todo', 1),
('Design settings and search pages', '', 'Doing', 2),
('Add account management endpoints', '', 'Doing', 2),
('Design onboarding flow', '', 'Doing', 2),
('Add search enpoints', '', 'Doing', 2),
('Add authentication endpoints', '', 'Doing', 2),
('Research pricing points of various competitors and trial different business models', 'We know what we are planning to build for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.', 'Doing', 2),
('Conduct 5 wireframe tests', 'Ensure the layout continues to make sense and we have strong buy-in from potential users.', 'Done', 3),
('Create wireframe prototype', 'Create a greyscale clickable wireframe prototype to test our assumptions so far.', 'Done', 3),
('Review results of usability tests and iterate', 'Keep iterating through the subtasks until we are clear on the core concepts for the app.', 'Done', 3),
('Create paper prototypes and conduct 10 usability tests with potential customers', '', 'Done', 3),
('Market discovery', 'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.', 'Done', 3),
('Competitor analysis', '', 'Done', 3),
('Research the market', 'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.', 'Done', 3);

INSERT INTO subtasks (title, is_completed, task_id) VALUES 
('Sign up page', true, 1),
('Sign in page', false, 1),
('Welcome page', false, 1),
('Search page', false, 2),
('Account page', false, 3),
('Billing page', false, 3),
('Internal testing', false, 4),
('External testing', false, 4),
('Settings - Account page', true, 5),
('Settings - Billing page', true, 5),
('Search page', false, 5),
('Upgrade plan', true, 6),
('Cancel plan', true, 6),
('Update payment method', false, 6),
('Sign up page', true, 7),
('Sign in page', false, 7),
('Welcome page', false, 7),
('Add search endpoint', true, 8),
('Define search filters', false, 8),
('Define user model', true, 9),
('Add auth endpoints', false, 9),
('Research competitor pricing and business models', true, 10),
('Outline a business model that works for our solution', false, 10),
('Talk to potential customers about our proposed solution and ask for fair price expectancy', false, 10),
('Complete 5 wireframe prototype tests', true, 11),
('Create clickable wireframe prototype in Balsamiq', true, 12),
('Meet to review notes from previous tests and plan changes', true, 13),
('Make changes to paper prototypes', true, 13),
('Conduct 5 usability tests', true, 13),
('Create paper prototypes for version one', true, 14),
('Complete 10 usability tests', true, 14),
('Interview 10 prospective customers', true, 15),
('Find direct and indirect competitors', true, 16),
('SWOT analysis for each competitor', true, 16),
('Write up research analysis', true, 17),
('Calculate TAM', true, 17);

COMMIT;