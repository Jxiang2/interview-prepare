import time
import threading

start = time.perf_counter()

def do_somthing(seconds):
    print(f'Sleeping {seconds} sec...')
    time.sleep(seconds)
    print('Done Sleeping')
    
threads = []
    
for _ in range(10):
    t = threading.Thread(target=do_somthing, args=[1.5]) # can not directly call do_something
    t.start()
    threads.append(t)
    
for thread in threads:
    thread.join()

finish = time.perf_counter()

print(f'finished in {round(finish-start, 2)} second(s)')