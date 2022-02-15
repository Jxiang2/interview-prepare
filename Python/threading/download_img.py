import requests
import time
import concurrent.futures

img_urls = [
        'https://images.unsplash.com/photo-1564135624576-c5c88640f235',
        'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6',
        'https://images.unsplash.com/photo-1522364723953-452d3431c267',
        'https://images.unsplash.com/photo-1513938709626-033611b8cc03',
        'https://images.unsplash.com/photo-1507143550189-fed454f93097',
        ]

def download_image(img_url):
        img_bytes = requests.get(img_url).content
        img_name = img_url.split('/')[3]
        img_name = f'{img_name}.jpg'
        with open(img_name, 'wb') as img_file:
            img_file.write(img_bytes)
            print(f'{img_name} was downloaded')

def main():
    t1 = time.perf_counter()

    with concurrent.futures.ThreadPoolExecutor() as executor:
        executor.map(download_image, img_urls)

    t2 = time.perf_counter()
    print(f'Finished in {t2-t1} seconds')


if __name__ == '__main__':
    main()