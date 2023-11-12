// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod splash;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![splash::close_splashscreen])
        .run(tauri::generate_context!())
        .expect("프로그램 실행 도중 에러가 발생하였습니다");
}
