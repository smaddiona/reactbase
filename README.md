# Reactbase - admin client for Pocketbase
---

Probably you are asking yourself "WHY" and yes i know that PB already has his admin UI. <br />

So why in the world I started this project? <br />

1. Dark mode. Gani made this aweasome tool but there is an issue since 0.7.7 asking for darkmode and the reason why its not yet implemented is pretty valid, the UI is changing very quickly. BUT if you check the source code of the UI, you will notice that is all hand written, so its difficult to handle. I took a different approach, using TailwindCSS for an easy to change style.
2. Mobile usability. currently pocketbase is hard to manage via mobile, thats not his main goal, but it would be a great addition.
3. Skills. That was an opportunity for me to put togheter all my knowledge and also become better at coding in React. I dont know svelte enough to put my hands on the source code and for work-related reasons i would like to stick to a tool and master it before starting other learning paths
4. Features. Leveraging the powerful tool that pocketbase is, it is meant also to be used as a standalone framework, so using the "backend" of pocketbase without making changes to its code, this UI will remain compatible and update-able asynchronously and will enable the implementation of new features such as the "email templates creation" without disrupting the roadmap of the original project
5. Language. React is a well known framework and the tool of choice of many web-devs out there, that said, this will enable more people on contributing on the project.
6. Reactbase is universal, just set the endpoint of your pb installation and you are good to go. In the future im planning to have more instances registered so you can switch with a simple selector.

There are other minor reasons why, but lets talk about the important stuff

### Contributing

I dont really know how to setup the contribution process right now, ill keep you updated.

### Demo

[Click here](https://reactbase.mddntwrk.com)

### Conclusion

Thanks to [Gani Georgiev](https://github.com/ganigeorgiev) that created this amazing tool, [Pocketbase](https://github.com/pocketbase/pocketbase) 