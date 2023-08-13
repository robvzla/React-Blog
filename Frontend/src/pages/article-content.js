const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet!.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },     {
        name: 'mongodb',
        title: 'Learn MongoDB',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },     {
        name: 'mongodb-mysql',
        title: 'MongoDB vs. MySQL: A Deeper Dive into the Database Duel',
        content: [
            `In the ever-expanding landscape of database management systems, two heavyweights 
            have been vying for attention and adoption: MongoDB and MySQL. Each brings its own 
            set of strengths and weaknesses to the table, catering to different needs and use 
            cases. Let's embark on a journey through the pros and cons of MongoDB and MySQL, 
            uncovering what makes each of them shine and stumble.`,
            `MongoDB, often touted as a pioneer of NoSQL databases, offers a flexible and scalable 
            solution for handling data. Its document-oriented structure allows for the storage of 
            complex, hierarchical data without the need for predefined schemas. This agility suits 
            projects where data structures evolve over time, enabling developers to adapt on the fly.`,
            `For applications demanding lightning-fast read and write operations, MongoDB's horizontal 
            scaling capabilities are a game-changer. The ability to distribute data across multiple 
            servers ensures optimal performance even as the dataset grows exponentially.`,
            `However, this power comes at a cost. MongoDB's flexibility can sometimes lead to data 
            consistency challenges. Without the rigid schema constraints of relational databases, 
            ensuring data integrity becomes a shared responsibility between the application and the 
            database itself. Additionally, while MongoDB excels at handling unstructured data, complex 
            queries that span multiple documents might require extra effort.`,
            `MySQL, on the other hand, embodies the trusted, time-tested realm of relational databases. 
            It shines when data integrity is paramount and well-defined schemas are a necessity. 
            ACID (Atomicity, Consistency, Isolation, Durability) compliance ensures robust transactional 
            support, making it an ideal choice for applications that require strict data consistency.`,
            `The well-established relational structure of MySQL eases the process of handling complex queries, 
            particularly those involving intricate relationships between tables. Join operations are second 
            nature, and the robust query optimization engine optimizes performance for most use cases.`,
            `However, MySQL's rigid structure can feel constraining in scenarios where data evolves rapidly. 
            Modifying schemas can be cumbersome, potentially requiring downtime or intricate migration strategies. 
            Scaling vertically, while possible, might hit performance ceilings, necessitating a shift towards 
            sharding or other techniques to keep up with growing demands.`,
            `The verdict. Choosing between MongoDB and MySQL boils down to understanding your project's requirements 
            and trade-offs. MongoDB excels in scenarios where flexibility and scalability are paramount, perfect for 
            startups and projects with ever-changing data structures. MySQL, with its rock-solid relational foundation, 
            serves well when data consistency and complex queries are non-negotiable, making it a go-to choice for 
            traditional enterprise applications.`,
            `Ultimately, there's no one-size-fits-all answer. Both databases have their merits, and the choice depends 
            on your project's unique needs. MongoDB offers dynamic adaptability and seamless scaling, but requires diligent 
            data management. MySQL champions data integrity and structured queries, yet can feel restrictive in dynamic 
            environments. As the needs of your project evolve, the right decision might just reveal itself – a decision that 
            ensures your data management journey is as smooth as it is impactful.`,
        ]
    }, 
];

export default articles;