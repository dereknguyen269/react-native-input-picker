using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNReactNativeInputPicker
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeInputPickerModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeInputPickerModule"/>.
        /// </summary>
        internal RNReactNativeInputPickerModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeInputPicker";
            }
        }
    }
}
