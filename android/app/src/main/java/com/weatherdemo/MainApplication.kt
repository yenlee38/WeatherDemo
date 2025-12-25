package com.weatherdemo

import com.facebook.react.PackageList
import com.facebook.react.ReactPackage
import com.reactnativenavigation.react.NavigationReactNativeHost
import com.reactnativenavigation.NavigationApplication
import com.facebook.react.ReactNativeHost
import com.facebook.soloader.SoLoader

class MainApplication : NavigationApplication() {

    override val reactNativeHost: ReactNativeHost =
        object : NavigationReactNativeHost(this) {

            override fun getUseDeveloperSupport(): Boolean {
                return BuildConfig.DEBUG
            }

            override fun getJSMainModuleName(): String = "index"

            override fun getPackages(): List<ReactPackage> {
                return PackageList(this).packages
            }
        }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
    }
}
