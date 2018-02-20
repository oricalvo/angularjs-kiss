const template = `
    <h1>Hello Angular</h1>
`;

class AppComponent {
}

appModule.component("appRoot", {
    controller: AppComponent,
    template,
});
