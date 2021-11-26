# BlazorMeetsReact
POC project to render React in Blazor applications


I've seen a couple of POC's about rendering a react component in Blazor, but all of them just showed how to render 1 single component which required some hardcoding like registering the component to the JS window object.

As a challenge I wanted to go one step further, meaning that I wanted to make it easier to just add new React components in a folder without altering them for Blazor.

A pre-build script will register the component to the JS window object and add an enum value so you can pick React components kind of strongly typed by enums.

## Currently implemented
- Auto generate React index file
- Auto generate ReactComponent enum
- Render simple components
- Render simple components that have nested other components
- Render compenents with props
- Add custom style to components

## Wish list
- Generic way of communicating with between Blazor and React
- Use of external React UI Component libraries

## Requirements
- Visual Studio (project created with 2022)
- dotnet 6.0 SDK
- NodeJS / NPM

## Extra info
The auto generated files by the update script _update.js which is triggered by:

	<Target Name="create react component index" AfterTargets="BeforeBuild">
		<Exec Command="npm run update-react-index" />
	</Target>

This script wil generate _index.tsx which registers the render function to the JS window object and the ReactComponent.cs (enum). If you plan to fork and refactor this project by moving around folders and files in the React folder, then be sure you update this _update.js and the package.json.

## Build and Run
This is solution is set up to work in Visual Studio by simply running it with F5. If you created a new React component and need the new component to be available as an enum, just build with F6 and it will regenerate the enum file.

## License
See [LICENSE](LICENSE).