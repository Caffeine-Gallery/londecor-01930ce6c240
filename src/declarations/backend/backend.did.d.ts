import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Project {
  'id' : string,
  'title' : string,
  'description' : string,
  'imageUrl' : string,
  'category' : string,
}
export interface Testimonial {
  'content' : string,
  'author' : string,
  'rating' : bigint,
}
export interface _SERVICE {
  'addProject' : ActorMethod<[Project], undefined>,
  'addTestimonial' : ActorMethod<[Testimonial], undefined>,
  'getProjects' : ActorMethod<[], Array<Project>>,
  'getTestimonials' : ActorMethod<[], Array<Testimonial>>,
  'submitContact' : ActorMethod<[string, string, string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
