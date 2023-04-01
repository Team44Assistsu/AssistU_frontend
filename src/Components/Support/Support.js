import React, { Component } from "react";
import { NavigationBar } from "../../Atoms";

class Support extends Component {
  render() {
    return (
      <>
        <NavigationBar isSupport />
        <div>
          What is dissociative identity disorder (DID)?{" "}
          <p>
              Dissociative identity disorder (DID) is a mental health condition.
            People with DID have two or more separate identities. These
            personalities control their behavior at different times. Each
            identity has its own personal history, traits, likes and dislikes.
            DID can lead to gaps in memory and hallucinations (believing
            something is real when it isn’t).  <br />
            Dissociative identity disorder used to be called multiple
            personality disorder or split personality disorder.  <br /> DID is
            one of several dissociative disorders. 
            <br /> These disorders affect a person’s ability to connect with
            reality. Other dissociative disorders include: Depersonalized or
            derealization disorder, which causes a feeling of detachment from
            your actions. Dissociative amnesia, or problems remembering
            information about yourself.{" "}
          </p>
           
        </div>
        <div>
          How common is DID?  
          <p>
            {" "}
            DID is very rare. The disorder affects between 0.01 and 1% of the
            population. It can occur at any age. Women are more likely than men
            to have DID. Symptoms and Causes What causes dissociative identity
            disorder (DID)?   DID is usually the result of sexual or physical
            abuse during childhood. Sometimes it develops in response to a
            natural disaster or other traumatic events like combat. The disorder
            is a way for someone to distance or detach themselves from trauma.
          </p>
          <p>
            {" "}
            What are the signs and symptoms of DID?   A person with DID has two
            or more distinct identities. The “core” identity is the person’s
            usual personality. “Alters” are the person’s alternate
            personalities. Some people with DID have up to 100 alters.   Alters
            tend to be very different from one another. The identities might
            have different genders, ethnicities, interests and ways of
            interacting with their environments.
          </p>{" "}
           <p> Other common signs and symptoms of DID can include: </p>    
          <ul>
            <li> Anxiety. </li>
            <li>Delusions. </li>
            <li> Depression.</li>
            <li> Disorientation. </li>
            <li>Drug or alcohol abuse. </li>
            <li>Memory loss.</li>
            <li> Suicidal thoughts or self-harm.</li>
          </ul>
           
        </div>
      </>
    );
  }
}

export default Support;
