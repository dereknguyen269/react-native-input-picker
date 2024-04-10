
# react-native-input-picker

## Getting started

`$ npm install react-native-input-picker --save`

### Mostly automatic installation

`$ react-native link react-native-input-picker`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-input-picker` and add `RNReactNativeInputPicker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeInputPicker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeInputPickerPackage;` to the imports at the top of the file
  - Add `new RNReactNativeInputPickerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-input-picker'
  	project(':react-native-input-picker').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-input-picker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-input-picker')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativeInputPicker.sln` in `node_modules/react-native-input-picker/windows/RNReactNativeInputPicker.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNReactNativeInputPicker;` to the usings at the top of the file
  - Add `new RNReactNativeInputPickerPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import Picker from 'react-native-input-picker';

// TODO: What do with the module?

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}],
      openModal: false,
      value: 'Item 1'
    };
  }

  onFocus() {
    this.setState({openModal: true});
  }

  hideModal() {
    this.setState({openModal: false});
  }

  _renderItemss() {
    return this.state.items.map((item, index) => {
      return <Item key={index + 1} label={item.name} value={item.name} />
    });
  }

  render () {

    return () {
        ........

        <TextInput
          placeholder="Item"
          keyboardType="default"
          onFocus={ () => this.onFocus() }
          placeholderTextColor="#FFFFFF"
          style={styles.input} value={this.state.value} />

        <CustomPicker
          items={this._renderItems()}
          openModal={true}
          hideModal={this.hideModal.bind(this)}
          style={[styles.selectOptions]}
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.value}
          onValueChange={(value) => this.setState({ value: value, openModal: false })} />

        ......
      }
    }

}
```
