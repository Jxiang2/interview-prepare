import concurrent.futures
import time

secs = [5, 4, 3, 2, 1]

def do_something(seconds):
    print(f'Sleeping {seconds} sec...')
    time.sleep(seconds)
    return f'Done Sleeping...{seconds}'


def main():
    start = time.perf_counter()
    
    with concurrent.futures.ProcessPoolExecutor() as executor:
        results = executor.map(do_something, secs)
        for result in results:
            try:
                print(result)
            except Exception as e:
                print(str(e))

    finish = time.perf_counter()
    print(f'Finished in {round(finish-start, 2)} second(s)')

   
if __name__ == '__main__':
    main()