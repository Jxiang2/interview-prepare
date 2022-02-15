import time
import multiprocessing


def do_somthing(seconds):
    print(f'Sleeping {seconds} sec...')
    time.sleep(seconds)
    print('Done Sleeping')


def main():
    start = time.perf_counter()
    processes = []
        
    for _ in range(10):
        t = multiprocessing.Process(target=do_somthing, args=[1.5]) # can not directly call do_something
        t.start()
        processes.append(t)
        
    for process in processes:
        process.join()

    finish = time.perf_counter()
    print(f'finished in {round(finish-start, 2)} second(s)')
    
    
if __name__ == '__main__':
    main()