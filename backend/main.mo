import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";

actor {
    // Types for our data structures
    type Project = {
        id: Text;
        title: Text;
        description: Text;
        imageUrl: Text;
        category: Text;
    };

    type ContactMessage = {
        name: Text;
        email: Text;
        message: Text;
        timestamp: Time.Time;
    };

    type Testimonial = {
        author: Text;
        content: Text;
        rating: Nat;
    };

    // Stable variables to persist data
    private stable var projects : [Project] = [];
    private stable var messages : [ContactMessage] = [];
    private stable var testimonials : [Testimonial] = [];

    // Project management
    public func addProject(project: Project) : async () {
        let projectsBuffer = Buffer.fromArray<Project>(projects);
        projectsBuffer.add(project);
        projects := Buffer.toArray(projectsBuffer);
    };

    public query func getProjects() : async [Project] {
        projects
    };

    // Contact form handling
    public func submitContact(name: Text, email: Text, message: Text) : async () {
        let newMessage : ContactMessage = {
            name = name;
            email = email;
            message = message;
            timestamp = Time.now();
        };
        let messagesBuffer = Buffer.fromArray<ContactMessage>(messages);
        messagesBuffer.add(newMessage);
        messages := Buffer.toArray(messagesBuffer);
    };

    // Testimonials management
    public func addTestimonial(testimonial: Testimonial) : async () {
        let testimonialsBuffer = Buffer.fromArray<Testimonial>(testimonials);
        testimonialsBuffer.add(testimonial);
        testimonials := Buffer.toArray(testimonialsBuffer);
    };

    public query func getTestimonials() : async [Testimonial] {
        testimonials
    };
}
