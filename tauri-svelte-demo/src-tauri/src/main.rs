#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::*;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            coffee(app.get_window("main").unwrap());
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn coffee(window: tauri::Window) {
    std::thread::spawn(move || loop {
        std::thread::sleep(std::time::Duration::from_secs(1));
        window.emit("coffee-drank", {}).unwrap();
    });
}
