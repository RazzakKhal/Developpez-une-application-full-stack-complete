INSERT INTO Theme (name, description) VALUES
('Java', 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.'),
('Python', 'An interpreted, high-level, and general-purpose programming language known for its readability and simplicity.'),
('JavaScript', 'A versatile, high-level programming language commonly used in web development for client-side scripting.'),
('C#', 'A modern, object-oriented, and type-safe programming language developed by Microsoft as part of the .NET initiative.'),
('Ruby', 'A dynamic, open-source programming language with a focus on simplicity and productivity, known for its elegant syntax.'),
('Go', 'A statically typed, compiled programming language designed at Google known for its simplicity and efficiency.'),
('Swift', 'A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS developed by Apple.'),
('Kotlin', 'A cross-platform, statically typed, general-purpose programming language with type inference, known as an official language for Android development.'),
('PHP', 'A popular general-purpose scripting language that is especially suited to web development.'),
('Rust', 'A multi-paradigm, systems programming language focused on safety, especially safe concurrency.');

CREATE INDEX idx_article_theme_id ON article(theme_id);
CREATE INDEX idx_subscription_theme_id ON subscription(theme_id);
CREATE INDEX idx_subscription_user_id ON subscription(user_id);
