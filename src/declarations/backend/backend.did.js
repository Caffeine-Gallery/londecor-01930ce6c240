export const idlFactory = ({ IDL }) => {
  const Project = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'category' : IDL.Text,
  });
  const Testimonial = IDL.Record({
    'content' : IDL.Text,
    'author' : IDL.Text,
    'rating' : IDL.Nat,
  });
  return IDL.Service({
    'addProject' : IDL.Func([Project], [], []),
    'addTestimonial' : IDL.Func([Testimonial], [], []),
    'getProjects' : IDL.Func([], [IDL.Vec(Project)], ['query']),
    'getTestimonials' : IDL.Func([], [IDL.Vec(Testimonial)], ['query']),
    'submitContact' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
