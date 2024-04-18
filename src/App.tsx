import {
	DetailsView,
	FileManagerComponent,
	Inject,
	NavigationPane,
	Toolbar,
} from "@syncfusion/ej2-react-filemanager";
import "./App.css";
function App() {
	const host_url: string = "https://ej2-aspcore-service.azurewebsites.net/";
	return (
		<div className="App">
			<FileManagerComponent
				ajaxSettings={{
					url: host_url + "api/FileManager/FileOperations",
					downloadUrl: host_url + "api/FileManager/Download",
					uploadUrl: host_url + "api/FileManager/Upload",
					getImageUrl: host_url + "api/FileManager/GetImage",
				}}
			>
				<Inject services={[NavigationPane, Toolbar, DetailsView]}></Inject>
			</FileManagerComponent>
		</div>
	);
}

export default App;
